import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// --- Sample Data with Extra Metadata ---
const CATEGORIES = [
  'All Tasks',
  'Assembly',
  'Transport',
  'Plumbing',
  'Electrical',
];

const RECENT_STATS = [
  { label: 'Active Bids', value: '3', icon: 'gavel' },
  { label: 'Earnings', value: 'DKK 4.2k', icon: 'cash-multiple' },
  { label: 'Completed', value: '12', icon: 'check-decagram' },
];

const TASKS = [
  {
    id: '1',
    title: 'Partition Wall Installation & Sliding Door Mounting',
    category: 'Carpentry',
    location: 'Roskilde',
    distance: '3.2 km',
    timing: 'Flexible schedule',
    price: '7,060',
    timeAgo: '2h ago',
    avatarText: 'JV',
    avatarBg: '#0F766E',
    isUrgent: true,
  },
  {
    id: '2',
    title: 'Help transporting 3-seater sofa to 2nd floor',
    category: 'Transport',
    location: 'Albertslund',
    distance: '0.8 km',
    timing: 'This weekend',
    price: '350',
    timeAgo: '2h ago',
    offersCount: 2,
    avatarText: 'SC',
    avatarBg: '#65A30D',
    image: 'https://picsum.photos/120/120',
    isUrgent: false,
  },
  {
    id: '3',
    title: 'Washing machine & dryer countertop fitting',
    category: 'Plumbing',
    location: 'København N',
    distance: '5.5 km',
    timing: 'Flexible schedule',
    price: '1,300',
    timeAgo: '3h ago',
    avatarText: 'VB',
    avatarBg: '#84CC16',
    isUrgent: false,
  },
];

export default function HandyhandScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All Tasks');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 1. MODERN APP BAR */}
      <View style={styles.header}>
        <View style={styles.brandContainer}>
          <View style={styles.logoBadge}>
            <Ionicons name="construct" size={16} color="#FFFFFF" />
          </View>
          <Text style={styles.brandTitle}>
            Handy<Text style={styles.brandAccent}>Gate</Text>
          </Text>
        </View>

        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerIconButton}>
            <Ionicons name="search-outline" size={20} color="#334155" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconButton}>
            <Ionicons name="notifications-outline" size={20} color="#334155" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileAvatar}>
            <Text style={styles.profileAvatarText}>FN</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* 2. STATS & QUICK METRICS BAR */}
        <View style={styles.statsContainer}>
          {RECENT_STATS.map((stat, idx) => (
            <View key={idx} style={styles.statCard}>
              <MaterialCommunityIcons
                name={stat.icon as any}
                size={18}
                color="#0EA5E9"
              />
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* 3. CATEGORY SCROLL FILTER */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        >
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <TouchableOpacity
                key={cat}
                onPress={() => setSelectedCategory(cat)}
                style={[styles.chip, isActive && styles.chipActive]}
              >
                <Text
                  style={[styles.chipText, isActive && styles.chipTextActive]}
                >
                  {cat}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* 4. TASK SECTION HEADER */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Nearby Opportunities</Text>
            <Text style={styles.sectionSubtitle}>
              Matching your expertise & location
            </Text>
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options-outline" size={16} color="#0EA5E9" />
            <Text style={styles.filterButtonText}>Filter</Text>
          </TouchableOpacity>
        </View>

        {/* 5. ENHANCED TASK CARDS */}
        <View style={styles.taskList}>
          {TASKS.map((task) => (
            <Pressable key={task.id} style={styles.taskCard}>
              {/* Top Meta: Urgent Badge & Tag */}
              <View style={styles.cardHeader}>
                <View style={styles.tagRow}>
                  <View style={styles.categoryBadge}>
                    <Text style={styles.categoryBadgeText}>
                      {task.category}
                    </Text>
                  </View>
                  {task.isUrgent && (
                    <View style={styles.urgentBadge}>
                      <Text style={styles.urgentBadgeText}>Urgent</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.timeAgo}>{task.timeAgo}</Text>
              </View>

              {/* Main Content & Thumbnail */}
              <View style={styles.cardBody}>
                <View style={styles.cardTextContent}>
                  <Text style={styles.taskTitle} numberOfLines={2}>
                    {task.title}
                  </Text>

                  {/* Location & Distance */}
                  <View style={styles.infoRow}>
                    <Ionicons
                      name="location-outline"
                      size={14}
                      color="#64748B"
                    />
                    <Text style={styles.infoText}>
                      {task.location} <Text style={styles.dot}>•</Text>{' '}
                      {task.distance}
                    </Text>
                  </View>

                  {/* Timing */}
                  <View style={styles.infoRow}>
                    <Ionicons name="time-outline" size={14} color="#64748B" />
                    <Text style={styles.infoText}>{task.timing}</Text>
                  </View>
                </View>

                {/* Right side Image / Avatar */}
                {task.image ? (
                  <View style={styles.imageContainer}>
                    <Image
                      source={{ uri: task.image }}
                      style={styles.taskThumbnail}
                    />
                    <View
                      style={[
                        styles.miniAvatar,
                        { backgroundColor: task.avatarBg },
                      ]}
                    >
                      <Text style={styles.miniAvatarText}>
                        {task.avatarText}
                      </Text>
                    </View>
                  </View>
                ) : (
                  <View
                    style={[
                      styles.avatarCircle,
                      { backgroundColor: task.avatarBg },
                    ]}
                  >
                    <Text style={styles.avatarCircleText}>
                      {task.avatarText}
                    </Text>
                  </View>
                )}
              </View>

              {/* Footer Divider & Price */}
              <View style={styles.cardFooter}>
                <View style={styles.priceContainer}>
                  <Text style={styles.currency}>DKK</Text>
                  <Text style={styles.priceValue}>{task.price}</Text>
                </View>

                <View style={styles.footerRight}>
                  {task.offersCount ? (
                    <View style={styles.offersBadge}>
                      <Ionicons
                        name="people-outline"
                        size={12}
                        color="#0EA5E9"
                      />
                      <Text style={styles.offersCountText}>
                        {task.offersCount} offers
                      </Text>
                    </View>
                  ) : null}
                  <TouchableOpacity style={styles.applyButton}>
                    <Text style={styles.applyButtonText}>Make Offer</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Pressable>
          ))}
        </View>

        {/* 6. PROFILE COMPLETION BANNER */}
        <View style={styles.bannerCard}>
          <View style={styles.bannerIconContainer}>
            <Ionicons name="shield-checkmark" size={24} color="#0EA5E9" />
          </View>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Strengthen your profile</Text>
            <Text style={styles.bannerSubtitle}>
              Verified users get 40% more offers from task posters.
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#94A3B8" />
        </View>
      </ScrollView>

      {/* 7. FLOATING ACTION BUTTON */}
      <TouchableOpacity style={styles.fabButton} activeOpacity={0.85}>
        <Ionicons name="add" size={24} color="#FFFFFF" />
        <Text style={styles.fabText}>Post Task</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  /* Header */
  header: {
    height: 60,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoBadge: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#0EA5E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.5,
  },
  brandAccent: {
    color: '#0EA5E9',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerIconButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: 9,
    right: 9,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#EF4444',
  },
  profileAvatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#0EA5E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAvatarText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },

  /* Scroll Container */
  scrollContainer: {
    flex: 1,
  },

  /* Stats Section */
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 16,
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  statValue: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 4,
  },
  statLabel: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },

  /* Chips */
  categoryScroll: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 8,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  chipActive: {
    backgroundColor: '#0F172A',
    borderColor: '#0F172A',
  },
  chipText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748B',
  },
  chipTextActive: {
    color: '#FFFFFF',
  },

  /* Section Header */
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#E0F2FE',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  filterButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0EA5E9',
  },

  /* Task Cards */
  taskList: {
    paddingHorizontal: 20,
    gap: 14,
  },
  taskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  tagRow: {
    flexDirection: 'row',
    gap: 6,
  },
  categoryBadge: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  categoryBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#475569',
  },
  urgentBadge: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  urgentBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#EF4444',
  },
  timeAgo: {
    fontSize: 11,
    color: '#94A3B8',
  },

  /* Card Body */
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  cardTextContent: {
    flex: 1,
    gap: 6,
  },
  taskTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
    lineHeight: 21,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  infoText: {
    fontSize: 12,
    color: '#64748B',
  },
  dot: {
    color: '#CBD5E1',
  },
  avatarCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarCircleText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
  imageContainer: {
    position: 'relative',
  },
  taskThumbnail: {
    width: 48,
    height: 48,
    borderRadius: 10,
  },
  miniAvatar: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  miniAvatarText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
  },

  /* Card Footer */
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 3,
  },
  currency: {
    fontSize: 11,
    fontWeight: '600',
    color: '#64748B',
  },
  priceValue: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
  },
  footerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  offersBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  offersCountText: {
    fontSize: 12,
    color: '#0EA5E9',
    fontWeight: '600',
  },
  applyButton: {
    backgroundColor: '#0EA5E9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },

  /* Banner Card */
  bannerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 80,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 12,
  },
  bannerIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#E0F2FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
  bannerSubtitle: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },

  /* Floating Action Button */
  fabButton: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0EA5E9',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 30,
    gap: 6,
    shadowColor: '#0EA5E9',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },
  fabText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
});
